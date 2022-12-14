import React, { createContext, useCallback, useContext, useState } from 'react';
import { AlphabetGreek, ClipboardText, FileText, MessageChatbot, Microphone, Microphone2, Mountain, QuestionMark } from 'tabler-icons-react';
import { ConversationalNode, QnANode, SpeechInputNode, SpeechToTextNode, SummarizationNode, TextInputNode, TextToImageNode, TranslationNode } from '../components/Nodes';

const ModelNodes = [
    {
        name: "Speech-to-Text",
        type: 'SpeechToText',
        color: '#ffaa00',
        icon: <Microphone2
            size={25}
            strokeWidth={1.5}
            color={'#ffaa00'}
        />
    },
    {
        name: "Translation",
        type: 'Translation',
        color: '#7dd279',
        icon: <AlphabetGreek
            size={25}
            strokeWidth={1.5}
            color={'#7dd279'}
        />
    },
    {
        name: "Q&A",
        type: 'QnA',
        color: '#384bff',
        icon: <QuestionMark
            size={25}
            strokeWidth={1.5}
            color={'#384bff'}
        />
    },
    {
        name: "Text-to-Image",
        type: 'TextToImage',
        color: '#bf40af',
        icon: <Mountain
            size={25}
            strokeWidth={1.5}
            color={'#bf40af'}
        />
    },
    {
        name: "Conversational",
        type: 'Conversational',
        color: '#ff3f3f',
        icon: <MessageChatbot
            size={25}
            strokeWidth={1.5}
            color={'#ff3f3f'}
        />
    },
    {
        name: "Summarization",
        type: 'Summarization',
        color: '#7676fc',
        icon: <ClipboardText
            size={25}
            strokeWidth={1.5}
            color={'#7676fc'}
        />
    }
]

const InputNodes = [
    {
        name: "Speech Input",
        type: 'SpeechInput',
        color: '#f656ff',
        icon: <Microphone
            size={25}
            strokeWidth={1.5}
            color={'#f656ff'}
        />
    },
    {
        name: "Text Input",
        type: 'TextInput',
        color: '#ff6532',
        icon: <FileText
            size={25}
            strokeWidth={1.5}
            color={'#ff6532'}
        />
    },
]

const nodeTypes = {
    // Model Nodes
    SpeechToText: SpeechToTextNode,
    Translation: TranslationNode,
    QnA: QnANode,
    TextToImage: TextToImageNode,
    Conversational: ConversationalNode,
    Summarization: SummarizationNode,

    // Input Nodes
    TextInput: TextInputNode,
    SpeechInput: SpeechInputNode
};

const initialState = {
    nodes: [
        {
            id: 'SpeechToText-1',
            type: 'SpeechToText',
            position: { x: 200, y: 200 },
            data: {
                value: 123,
                model: {
                    name: "Speech-to-Text",
                    type: 'SpeechToText',
                    color: '#ffaa00',
                    icon: <Microphone2
                        size={25}
                        strokeWidth={1.5}
                        color={'#ffaa00'}
                    />
                }
            }
        },
    ],
    edges: [],
};

const AppContext = createContext();

export function useApp() {
    return useContext(AppContext);
}

const AppProvider = ({ children }) => {
    const [appState, setAppState] = useState(initialState);

    const updateAppState = useCallback((componentName, parameters) => {
        setAppState(prev => ({
            ...prev,
            [componentName]: {
                ...prev[componentName],
                ...parameters
            }
        }))
    }, []);

    const clearComponentState = useCallback((componentName) => {
        setAppState(prev => ({
            ...prev,
            [componentName]: {}
        }))
    }, []);

    const clearAppState = useCallback(() => {
        setAppState(initialState)
    })

    const value = {
        appState,
        setAppState,
        ModelNodes,
        InputNodes,
        nodeTypes,
        updateAppState,
        clearComponentState,
        clearAppState
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
