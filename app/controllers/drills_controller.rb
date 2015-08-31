class DrillsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_drill, only: %i(show check next)
  before_action :set_progress, only: %i(show check)
  before_action :add_answer_count, only: :check
  before_action :answer_params, only: :check

  def show
    @action = "question"
  end

  def check
    @action = @drill.check(@answer) ? "correct" : "incorrect"
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

  def set_drill
    id = params[:id] ||= params[:drill_id] ||= 0
    @drill = Drill.find_by(exeid: id)
  end

  def set_progress
    unless @progress = current_user.progresses.find_by(drill: @drill)
      current_user.progresses.create(drill: @drill)
    end

    def add_answer_count
      @progress.count += 1
      @progress.save
    end
  end
end
