package co.yedam.student.web;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.student.service.StudentService;
import co.yedam.student.service.StudentVO;
import co.yedam.student.serviceImpl.StudentServiceImpl;

@WebServlet ({"/deditStudent.do", "/studentMod.do"})
public class ModStudentServlet extends HttpServlet {
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		req.setCharacterEncoding("UTF-8");
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/json; charset=UTF-8");
		
		StudentVO vo = new StudentVO();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		
		vo.setStudentId(req.getParameter("id"));
		vo.setStudentName(req.getParameter("name"));
		vo.setStudentPassword(req.getParameter("pw"));
		try {
			vo.setStudentBirthday(sdf.parse(req.getParameter("birthday")));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		StudentService svc = new StudentServiceImpl();
		if (svc.editStudent(vo)) {
			resp.getWriter().print("{\"retCode\" : \"OK\"}");
		} else {
			resp.getWriter().print("{\"retCode\" : \"NG\"}");
		}
	}
}
