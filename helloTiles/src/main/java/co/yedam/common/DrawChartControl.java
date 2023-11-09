package co.yedam.common;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.reply.service.ReplyService;
import co.yedam.reply.serviceImpl.ReplyServiceImpl;

public class DrawChartControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		ReplyService svc = new ReplyServiceImpl();
		List<Map<String, Object>> listMap = svc.getReplyCntByMember();	
		
		Map<String, Object> map = new HashMap<>();
		Gson gson = new GsonBuilder().create();
		
		if (listMap != null) map.put("listMap", listMap);
		try {
			resp.getWriter().print(gson.toJson(map));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
