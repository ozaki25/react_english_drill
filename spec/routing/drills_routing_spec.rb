require "rails_helper"

RSpec.describe DrillsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/drills").to route_to("drills#index")
    end

    it "routes to #new" do
      expect(:get => "/drills/new").to route_to("drills#new")
    end

    it "routes to #show" do
      expect(:get => "/drills/1").to route_to("drills#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/drills/1/edit").to route_to("drills#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/drills").to route_to("drills#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/drills/1").to route_to("drills#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/drills/1").to route_to("drills#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/drills/1").to route_to("drills#destroy", :id => "1")
    end

  end
end
