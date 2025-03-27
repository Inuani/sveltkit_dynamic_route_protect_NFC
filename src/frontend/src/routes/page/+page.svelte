<!-- src/frontend/src/routes/protected/+page.svelte -->
<script lang="ts">
    import '../../app.css';
  </script>
  
  <main>
    <h1>Protected Page</h1>
    
    <div class="success-box">
      <p>🔒 This is a protected page</p>
      <p>You're seeing this content because you've successfully authenticated with a valid NFC tag.</p>
    </div>
    
    <a href="/" class="button">Back to Home</a>
  </main>
  
  <style>
    .success-box {
      background-color: #d4edda;
      color: #155724;
      padding: 1rem;
      margin: 1rem 0;
      border-radius: 5px;
      border-left: 5px solid #28a745;
    }

    .button {
      display: inline-block;
      background-color: #007bff;
      color: white;
      padding: 0.5rem 1rem;
      text-decoration: none;
      border-radius: 5px;
      margin-top: 1rem;
    }
    
    .button:hover {
      background-color: #0069d9;
    }

  </style>