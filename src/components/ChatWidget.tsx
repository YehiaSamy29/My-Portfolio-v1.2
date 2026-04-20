import { useEffect } from "react";
import { createChat } from "@n8n/chat";
import "@n8n/chat/style.css";
import "./ChatWidget.css"; // your overrides (Step 3)

const ChatWidget = () => {
    useEffect(() => {
        const chat = createChat({
            webhookUrl:
                "https://yehiasamy-auto2.app.n8n.cloud/webhook/c6af4f6c-91db-4986-b22e-8e0c5de05779/chat",
            webhookConfig: {
                method: "POST",
                headers: {},
            },
            target: "#n8n-chat",
            mode: "window",
            chatInputKey: "chatInput",
            chatSessionKey: "sessionId",
            loadPreviousSession: false,
            metadata: {},
            showWelcomeScreen: false,
            defaultLanguage: "en",
            initialMessages: [
                "Hey! 👋 I'm Yehia's AI assistant. Ask me anything!"
            ],
            i18n: {
                en: {
                    title: "Yehia's AI Assistant",
                    subtitle: "AI-powered · 24/7 Available",
                    footer: "",
                    closeButtonTooltip: "Close Chat",
                    getStarted: "Let's Talk",
                    inputPlaceholder: "Ask me anything...",
                },
            },
            enableStreaming: false,
        });

        // ─── MutationObserver for "Thinking" Animation ─────────────────────
        // We watch for the n8n-chat typing indicator to appear and inject
        // our custom neural waveform HTML for a premium AI feel.
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof HTMLElement) {
                        const indicator = node.querySelector('.chat-message-typing') || 
                                          (node.classList.contains('chat-message-typing') ? node : null);
                        
                        if (indicator && !indicator.querySelector('.ys-thinking')) {
                            const thinking = document.createElement('div');
                            thinking.className = 'ys-thinking';
                            thinking.innerHTML = `
                                <span class="ys-thinking__label">Thinking</span>
                                <div class="ys-thinking__wave">
                                    <span class="ys-thinking__bar"></span>
                                    <span class="ys-thinking__bar"></span>
                                    <span class="ys-thinking__bar"></span>
                                    <span class="ys-thinking__bar"></span>
                                    <span class="ys-thinking__bar"></span>
                                </div>
                            `;
                            indicator.appendChild(thinking);
                        }
                    }
                });
            });
        });

        // Start observing the chat container for new messages
        const chatContainer = document.querySelector("#n8n-chat");
        if (chatContainer) {
            observer.observe(chatContainer, { childList: true, subtree: true });
        }

        // Cleanup function to prevent duplicate instances
        return () => {
            observer.disconnect();
            if (chat && typeof (chat as any).unmount === "function") {
                (chat as any).unmount();
            }
            // Also clear the container to be safe
            if (chatContainer) chatContainer.innerHTML = "";
        };
    }, []);

    return <div id="n8n-chat" />;
};

export default ChatWidget;
