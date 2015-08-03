require 'rails_helper'

RSpec.describe "drills/edit", type: :view do
  before(:each) do
    @drill = assign(:drill, Drill.create!(
      :japanese => "MyString",
      :english => "MyString"
    ))
  end

  it "renders the edit drill form" do
    render

    assert_select "form[action=?][method=?]", drill_path(@drill), "post" do

      assert_select "input#drill_japanese[name=?]", "drill[japanese]"

      assert_select "input#drill_english[name=?]", "drill[english]"
    end
  end
end
