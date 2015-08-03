require 'rails_helper'

RSpec.describe "drills/index", type: :view do
  before(:each) do
    assign(:drills, [
      Drill.create!(
        :japanese => "Japanese",
        :english => "English"
      ),
      Drill.create!(
        :japanese => "Japanese",
        :english => "English"
      )
    ])
  end

  it "renders a list of drills" do
    render
    assert_select "tr>td", :text => "Japanese".to_s, :count => 2
    assert_select "tr>td", :text => "English".to_s, :count => 2
  end
end
