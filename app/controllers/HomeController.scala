package controllers

import javax.inject._

import play.api.libs.json.Json
import play.api.mvc._

@Singleton
class HomeController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def appSummary = Action {
    Ok(
      Json.obj(
        "title" -> "Scala Play React Seed!",
        "content"-> "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sit suscipit rerum natus harum, facilis consectetur quod"))
  }
}
