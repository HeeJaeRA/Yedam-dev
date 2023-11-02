package co.yedam.student.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import java.util.List;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.student.service.StudentService;
import co.yedam.student.service.StudentVO;
import co.yedam.student.serviceImpl.StudentServiceImpl;

@WebServlet("/studentList.do")
public class StudentListServlet extends HttpServlet {
	// init -> service -> destroy
	
	public StudentListServlet() {
		System.out.println("생성자 call.");
	}
	
	@Override
	public void init(ServletConfig config) throws ServletException {
		System.out.println("init call.");
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		Enumeration<String> enumer = req.getHeaderNames();
		
		// 응답정보의 컨텐트타입 설정, 인코딩 처리
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/json; charset=UTF-8");
		
		PrintWriter out = resp.getWriter();
		
		while (enumer.hasMoreElements()) {
			String header = enumer.nextElement();
			String val = req.getHeader(header);
			System.out.println(header + ": " + val);
		}
		
		// studentList.do?name=Hong&age=20
//		String name = req.getParameter("name");
//		String age = req.getParameter("age");
//		System.out.println(name + "," + age);
//		System.out.println("service call.");
//		out.println("<b>Hello, " + name + "</b>");
		
		StudentService svc = new StudentServiceImpl();
		List<StudentVO> list = svc.listStudent();
		
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		String json = gson.toJson(list);
		out.println(json);
	}
	
	@Override
	public void destroy() {
		System.out.println("destroy call.");
	}
}
