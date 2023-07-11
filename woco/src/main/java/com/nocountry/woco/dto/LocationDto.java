package com.nocountry.woco.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@Builder
@NoArgsConstructor
@Data
public class LocationDto {
    private int id;
    private String city;
    private String province;
    private String country;

}
