package com.FitnessSense.demo.Helper;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.*;

@Service
public class LlmService {

    private final HttpClient client;
    private final ObjectMapper objectMapper = new ObjectMapper();
    private String baseUrl = "http://host.docker.internal:1234/v1";

    public LlmService() {
        this.client = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .version(HttpClient.Version.HTTP_1_1)
                .build();
    }

    public JsonNode generate(String prompt) throws Exception {
        String requestBody = buildJsonPayload(prompt);

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(baseUrl + "/chat/completions"))
                .header("Content-Type", "application/json")
                .timeout(Duration.ofSeconds(60))
                .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        
        if (response.statusCode() >= 400) {
            throw new RuntimeException("LLM API error: " + response.statusCode() + " " + response.body());
        }
        
        return objectMapper.readTree(response.body());
    }

    private String buildJsonPayload(String prompt) throws Exception {
        Map<String, Object> payload = new HashMap<>();
        payload.put("model", "local-model");
        payload.put("messages", List.of(Map.of("role", "user", "content", prompt)));
        
        return objectMapper.writeValueAsString(payload);
    }
}