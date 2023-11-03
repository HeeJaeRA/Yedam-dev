package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class FrontController extends HttpServlet {

	Map<String, Command> map = new HashMap<>();
	
	@Override
	public void init() throws ServletException {
		map.put("/FirstServlet.do", new FirstControl());
		map.put("/second.do", new SecondControl());
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/html; charset=utf-8");
//		System.out.println("FrontController");
		
		String uri = req.getRequestURI();
		String context = req.getServletContext().getContextPath();
		String page = uri.substring(context.length());
		
//		System.out.println(page);
		
		Command controller = map.get(page);
		controller.execute(req, resp);
	}
	
}
