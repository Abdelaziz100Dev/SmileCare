//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.WebSecurityConfigurer;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http
//                .authorizeRequests();
////                .antMatchers("/", "/public/**").permitAll()  // Specify public URLs
////                .anyRequest().authenticated()
////                .and()
////                .formLogin()
////                .loginPage("/login")  // Specify custom login page
////                .permitAll()
////                .and()
////                .logout()
////                .permitAll();
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        // Use NoOpPasswordEncoder for simplicity (not recommended for production)
//        return NoOpPasswordEncoder.getInstance();
//    }
//}
