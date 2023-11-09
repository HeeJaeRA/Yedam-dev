package co.yedam.reply.web;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Command;
import co.yedam.reply.service.ReplyService;
import co.yedam.reply.serviceImpl.ReplyServiceImpl;

public class RemoveReplyControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {

		ReplyService svc = new ReplyServiceImpl();

		String rno = req.getParameter("replyNo");

		Map<String, String> map = new HashMap<>();

		Gson gson = new GsonBuilder().create();

		if (svc.removeReply(Integer.parseInt(rno))) {
			map.put("retCode", "OK");
		} else {
			map.put("retCode", "NG");
		}

		resp.setContentType("text/json; charset=UTF-8");
		try {
			resp.getWriter().print(gson.toJson(map));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
