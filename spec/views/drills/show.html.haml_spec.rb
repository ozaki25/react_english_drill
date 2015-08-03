require 'rails_helper'

RSpec.describe "drills/show", type: :view do
  before(:each) do
    @drill = assign(:drill, Drill.create!(
      :japanese => "Japanese",
      :english => "English"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Japanese/)
    expect(rendered).to match(/English/)
  end
end
