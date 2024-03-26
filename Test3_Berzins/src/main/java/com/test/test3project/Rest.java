package com.test.test3project;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/RestServlet")
public class Rest extends HttpServlet {
     protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
         String text = request.getParameter("text");
         int number = Integer.parseInt(request.getParameter("number"));

         System.out.println("Received text: " + text);
         System.out.println("Received number: " + number);

         response.getWriter().write("Data received successfully.");
     }
}