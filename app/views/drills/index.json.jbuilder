json.array!(@drills) do |drill|
  json.extract! drill, :id, :japanese, :english
  json.url drill_url(drill, format: :json)
end
