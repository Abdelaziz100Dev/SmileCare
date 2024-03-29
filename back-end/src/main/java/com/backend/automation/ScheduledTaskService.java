package com.backend.automation;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Component
public class ScheduledTaskService {



//    @Scheduled(fixedRate = 2_000) //  43_200_000ml Run every 12 hours (12 * 60 * 60 * 1000 milliseconds)
//    public void simulateDailyTasks() {
//        taskModificationRequestRepository.findAll().stream()
//                .filter(r-> Duration.between(r.getRequestDate(), LocalDateTime.now()).toHours() > 12)
//                .forEach(r ->{
//                    r.getRequestingUser().doubleTheModificationTokensStock();
//                    userRepository.save(r.getRequestingUser());
//                });
//        System.out.println("-------------- Daily task simulation is running");
//    }
//
//    @Scheduled(fixedRate = 5_000) // 86_200_000 Run every 24 hours (24 * 60 * 60 * 1000 milliseconds)
//    public void markOverdueTasksAsNotCompleted() {
//        taskRepository.findAll().stream()
//                .filter(t-> t.isOverdue())
//                .forEach(t->{
//                    t.setNotComplete();
//                    taskRepository.save(t);});
//        System.out.println("-------------- overdue task simulation is running");
//    }
}
