#!/bin/bash
echo ""
echo "✍️  Writing Voice Interview"
echo "───────────────────────────"
echo ""
echo "🌐 Opening interview in browser..."
echo "   (No backend needed — everything runs in the browser)"
echo ""

open index.html 2>/dev/null || xdg-open index.html 2>/dev/null || echo "   Open index.html in your browser manually."

echo "📋 When you finish the interview, copy the full prompt and paste it into"
echo "   Claude, ChatGPT, Gemini, or any AI to generate your Writing Guide."
echo ""
