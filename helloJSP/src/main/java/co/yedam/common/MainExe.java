package co.yedam.common;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import co.yedam.student.service.StudentService;
import co.yedam.student.service.StudentVO;
import co.yedam.student.serviceImpl.StudentServiceImpl;

public class MainExe {

	public static void main(String[] args) {
		
		StudentVO vo = new StudentVO();
		StudentService svc = new StudentServiceImpl();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		// Date -> String	format();
		// String -> Date	parse();
		
		// 추가
		vo.setStudentId("newbie");
		vo.setStudentName("신입생");
		vo.setStudentPassword("1234");
		vo.setStudentDept("영문학과");
		try {
			vo.setStudentBirthday(sdf.parse("2001-01-01"));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		if (svc.addStudent(vo)) {
			System.out.println("추가 완료");
		} else {
			System.out.println("error");
		}
		
		// 수정
		vo.setStudentName("뉴비");
		vo.setStudentPassword("1111");
		vo.setStudentDept("경영학과");
		try {
			vo.setStudentBirthday(sdf.parse("2000-01-01"));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		if (svc.editStudent(vo)) {
			System.out.println("수정 완료");
		} else {
			System.out.println("error");
		}
		
		// 삭제
		if (svc.removeStudent("newbie")) {
			System.out.println("삭제 완료");
		} else {
			System.out.println("error");
		}
		
		// 선택 출력
		System.out.println(svc.getStudent("park"));
		
		// 전체 출력
		svc.listStudent().forEach(student -> System.out.println(student));
		
	}

}
