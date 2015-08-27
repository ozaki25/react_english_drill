class DrillsController < ApplicationController
  before_action :set_drill, only: %i(show check)
  before_action :answer_params, only: :check

  def show
  end

  def check
    @drill = Drill.next @drill
    puts "answer: #{@answer}"
    redirect_to @drill
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
