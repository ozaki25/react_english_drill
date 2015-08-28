class DrillsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_drill, only: %i(show check next)
  before_action :answer_params, only: :check

  def show
    @action = "question"
  end

  def check
    puts "check"
    @action = if @drill.check @answer
                "correct"
              else
                "incorrect"
              end
    logger.info "answer: #{@answer}"
    logger.info "result : #{@action.to_s}"
    render json: {action: @action}
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
    @drill = Drill.where(exeid: id).first
  end
end
