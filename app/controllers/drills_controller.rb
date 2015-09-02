class DrillsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_drill, only: %i(show check next)
  before_action :set_progress, only: %i(show check)
  before_action :answer_params, only: :check
  before_action :current_action_params, only: :check
  before_action :add_answer_count, only: :check

  def show
    @action = "question"
  end

  def check
    if @drill.check(@answer)
      @action = "correct"
      @progress.clear_count += 1
      @progress.current_section_result = true
      @progress.save
    else
      @action = "incorrect"
    end
    logger.info "answer: #{@answer}"
    logger.info "result : #{@action.to_s}"
    render json: {progress: @progress, action: @action}
  end

  def next
    if Progress.joins(:drill).where('drills.section_no = ?', current_user.current_section).where(current_section_result: false).empty?
      ligger.info 'section clear'
      Progress.refresh 
      current_user.current_section += 1
      current_user.save
      @drill = Drill.current_section_drills(current_user.current_section).first
    else
      @drill = @drill.next
    end
    set_progress
    @action = "question"
    render json: {drill: @drill, progress: @progress, action: @action}
  end
  
  private
  def answer_params
    @answer = params[:answer]
  end

  def current_action_params
    @current_action = params[:current_action]
  end

  def set_drill
    if id = params[:drill_id]
      @drill = Drill.find_by(exeid: id)
    else
      @drill = Drill.current_section_drills(current_user.current_section).not_clear.first
    end
  end

  def set_progress
    if Progress.joins(:drill).where('drills.section_no = ?', current_user.current_section).empty?
      Drill.current_section_drills(current_user.current_section).each do |drill|
        current_user.progresses.create(drill: drill)
      end
    end
    @progress = current_user.progresses.find_by(drill: @drill)
  end

  def add_answer_count
    logger.info "current_action : #{@current_action}"
    if @current_action == "question"
      @progress.answer_count += 1
      @progress.save
    end
  end
end
