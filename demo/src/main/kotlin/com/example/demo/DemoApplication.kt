package com.example.demo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.sql.DriverManager
import java.sql.SQLException


@SpringBootApplication
class DemoApplication

fun main(args: Array<String>) {
	runApplication<DemoApplication>(*args)
}


@CrossOrigin(origins = ["http://116.89.252.221:3000"])
@RestController
class MessageController(val jdbcTemplate: JdbcTemplate) {


	@GetMapping("/profile")
	fun getMessage(): List<List<Any>>? {
		return jdbcTemplate.query("SELECT * FROM summarys") { rs, _ ->
			(1..rs.metaData.columnCount).map { rs.getObject(it) }
		}
	}
	@GetMapping("/study")
	fun getsyudy(): List<List<Any>>? {
		return jdbcTemplate.query("SELECT * FROM study") { rs, _ ->
			(1..rs.metaData.columnCount).map { rs.getObject(it) }
		}
	}
	@GetMapping("/img")
	fun getimg(): List<List<Any>>? {
		return jdbcTemplate.query("SELECT * FROM photo") { rs, _ ->
			(1..rs.metaData.columnCount).map { rs.getObject(it) }
		}
	}
}
//asd/