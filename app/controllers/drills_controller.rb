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
    puts @answer
    if @drill.check(@answer)
      @action = "correct"
      @progress.clear = true
      @progress.save
    else
      @action = "incorrect"
    end
    logger.info "answer: #{@answer}"
    logger.info "result : #{@action.to_s}"
    render json: {progress: @progress, action: @action}
  end

  def next
    @drill = Drill.next @drill
    @action = "question"
    render json: {drill: @drill, action: @action}
  end
  
  private
  def answer_params
    @answer = params[:answer]
  end

  def current_action_params
    @current_action = params[:current_action]
  end

  def set_drill
    id = params[:id] ||= params[:drill_id] ||= 0
    @drill = Drill.find_by(exeid: id)
  end

  def set_progress
    unless @progress = current_user.progresses.find_by(drill: @drill)
      current_user.progresses.create(drill: @drill)
    end
  end

  def add_answer_count
    logger.info "current_action : #{@current_action}"
    if @current_action == "question"
      @progress.count += 1
      @progress.save
    end
  end
end
