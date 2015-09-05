class DrillsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_drill, only: %i(show check next)
  before_action :set_progress, only: %i(show check)
  before_action :set_current_action, only: :check
  before_action :add_answer_count, only: :check

  def show
    @action = "question"
  end

  def check
    if @drill.check(params[:answer])
      @action = "correct"
      @progress.drill_clear if @current_action == 'question'
      @progress.save
      current_user.update(drill: current_user.next_drill)
      current_user.progresses.refresh if current_user.section_clear?
    else
      @action = "incorrect"
      @progress.save if @current_action == 'question'
    end
    render json: { progress: @progress, action: @action }
  end

  def next
    @drill = current_user.drill
    set_progress
    @action = "question"
    render json: { drill: @drill, progress: @progress, action: @action }
  end
  
  private
  def set_drill
    @drill = if id = params[:drill_id]
               Drill.find_by(exeid: id)
             else
               unless current_user.drill
                 current_user.set_default_drill
                 current_user.save
               end
               current_user.drill
             end
  end

  def set_progress
    @progress = current_user.progresses.find_or_create_by(drill: @drill)
  end

  def set_current_action
    @current_action = params[:current_action]
  end

  def add_answer_count
    @progress.answer_count += 1 if @current_action == "question"
  end
end
