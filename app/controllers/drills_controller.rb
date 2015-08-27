class DrillsController < ApplicationController
  before_action :set_drill, only: %i(show check)

  def show
  end

  def check
    @drill = Drill.next @drill
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
