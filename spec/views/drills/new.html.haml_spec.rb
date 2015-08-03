require 'rails_helper'

RSpec.describe "drills/new", type: :view do
  before(:each) do
    assign(:drill, Drill.new(
      :japanese => "MyString",
      :english => "MyString"
    ))
  end

  it "renders new drill form" do
    render

    assert_select "form[action=?][method=?]", drills_path, "post" do

      assert_select "input#drill_japanese[name=?]", "drill[japanese]"

      assert_select "input#drill_english[name=?]", "drill[english]"
    end
  end
end
