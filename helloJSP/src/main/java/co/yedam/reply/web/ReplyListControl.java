package co.yedam.reply.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Command;
import co.yedam.common.PageDTO;
import co.yedam.reply.service.ReplyService;
import co.yedam.reply.service.ReplyVO;
import co.yedam.reply.serviceImpl.ReplyServiceImpl;

public class ReplyListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		resp.setContentType("text/json; charset=UTF-8");
		
		String bno = req.getParameter("bno");
		String page = req.getParameter("page");
		page = page == null ? "1" : page;
		
		PageDTO dto = new PageDTO(Integer.parseInt(bno), 96, Integer.parseInt(page));
		
		ReplyService svc = new ReplyServiceImpl();
		List<ReplyVO> list = svc.replyList(Integer.parseInt(bno), Integer.parseInt(page));
		
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		
		Map<String, Object> map = new HashMap<>();
		map.put("list", list);
		map.put("dto", dto);
		
		resp.setContentType("text/json; charset=UTF-8");
		try {
			resp.getWriter().print(gson.toJson(map));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
