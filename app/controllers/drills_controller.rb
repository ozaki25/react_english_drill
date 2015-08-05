class DrillsController < ApplicationController
  # GET /drills
  # GET /drills.json
  def index
    @drills = Drill.all
  end
end
