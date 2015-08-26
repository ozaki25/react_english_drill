class DrillsController < ApplicationController
  def index
    @drill = Drill.first
  end
end
