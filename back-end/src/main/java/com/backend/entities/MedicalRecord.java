package com.backend.entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MedicalRecord {
    @Id
    @GeneratedValue
    private Long id;


    @ManyToOne
    @JoinColumn(name = "patient_id")
    private User patient;

    private LocalDateTime visitDateTime;

    private String diagnosis;

    private String prescribedMedications; // field represents the medications prescribed to the patient during their medical visit
}
