require 'rails_helper'

RSpec.describe "Drills", type: :request do
  describe "GET /drills" do
    it "works! (now write some real specs)" do
      get drills_path
      expect(response).to have_http_status(200)
    end
  end
end
