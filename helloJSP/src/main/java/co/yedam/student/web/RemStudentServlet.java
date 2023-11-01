package co.yedam.student.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.student.service.StudentService;
import co.yedam.student.serviceImpl.StudentServiceImpl;

@WebServlet({ "/RemStudentServlet", "/studentDel.do" })
public class RemStudentServlet extends HttpServlet {
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/json; charset=UTF-8");
		
		String sid = req.getParameter("sid");
		
		StudentService svc = new StudentServiceImpl();
		if(svc.removeStudent(sid)) {
			resp.getWriter().print("{\"retCode\" : \"OK\"}");
		} else {
			resp.getWriter().print("{\"retCode\" : \"NG\"}");
		}
	}
}
