export async function POST(req) {
    try {
      const { name, email, message } = await req.json();
  
      // ✅ Example: Send Email via Web3Forms (Replace with actual setup)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "your-web3forms-access-key", // 🔴 Replace with actual key
          name,
          email,
          message,
        }),
      });
  
      if (!response.ok) throw new Error("Failed to send message");
  
      return Response.json({ success: true, message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
      return Response.json({ success: false, message: "Failed to send message" }, { status: 500 });
    }
  }
  
  export async function GET() {
    return Response.json({ message: "GET requests are not allowed" }, { status: 405 });
  }
  