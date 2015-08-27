class DrillsController < ApplicationController
  before_action :set_drill, only: %i(show check)
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
    @drill = Drill.next @drill
    puts "answer: #{@answer}"
    render json: {action: @action}
  end

  private
  def answer_params
    @answer = params[:answer]
  end

  def set_drill
    id = params[:id] ||= params[:drill_id]
    @drill = Drill.find(id)
  end
end
