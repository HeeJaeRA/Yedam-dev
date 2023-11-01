package co.yedam.student.service;

import java.util.Date;

import lombok.Data;

@Data

public class StudentVO {
	private String StudentId;
	private String StudentName;
	private String StudentPassword;
	private String StudentDept;
	private Date StudentBirthday;
}
