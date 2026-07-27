$endpoints = @(
    @{ Name = "Auth Service"; Url = "http://localhost:8080/api/auth/health" }
    @{ Name = "Order Service"; Url = "http://localhost:8080/api/orders/health" }
    @{ Name = "Catalog Service"; Url = "http://localhost:8080/api/hotels/health" }
    @{ Name = "Notification Service"; Url = "http://localhost:8080/api/notifications/health" }
    @{ Name = "Operation Service"; Url = "http://localhost:8080/api/chat/health" }
    @{ Name = "Analytics Service"; Url = "http://localhost:8080/api/analytics/api/analytics/dashboard" }
)

foreach ($ep in $endpoints) {
    try {
        $response = Invoke-RestMethod -Uri $ep.Url -Method Get -ErrorAction Stop
        Write-Host "✅ $($ep.Name) is UP" -ForegroundColor Green
    } catch {
        Write-Host "❌ $($ep.Name) FAILED: $($_.Exception.Message)" -ForegroundColor Red
    }
}
