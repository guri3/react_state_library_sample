require "kemal"
require "json"

class Todo
  def initialize(id : Int64, name : String, done : Bool)
    @id = id
    @name = name
    @done = done
  end

  JSON.mapping(
    id: Int64,
    name: String,
    done: Bool
  )
end

todos = (1..3).map{ |i| Todo.new(i.to_i64, "todo#{i}", false) }

get "/api/todos" do |env|
  sleep 3
  env.response.content_type = "application/json"
  todos.to_json
end

post "/api/todos" do |env|
  name = env.params.json["name"].as(String)
  todo = Todo.new((todos.size + 1).to_i64, name, false)
  todos.push todo
  todo.to_json
end

put "/api/todos" do |env|
  id = env.params.json["id"].as(Int64)
  todos = todos.map do |t|
    if id == t.id
      Todo.new(t.id, t.name, !t.done)
    else
      Todo.new(t.id, t.name, t.done)
    end
  end
  p todos
  todos.to_json
end

Kemal.run
