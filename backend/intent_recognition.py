import cohere
from cohere.classify import Example

co = cohere.Client('M0EkuRzkTT3Lu4FfylZcIcnzpcYTYxYO7xty4UDf')

examples = [
    Example("Could you summarize the text for me?", "Summarize"),
    Example("What does this document say?", "Summarize"),
    Example("Could you explain what the document is describing?", "Summarize"),
    Example("Can I buy online and pick up in store?", "Shipping and handling policy"),
    Example("What are your shipping options?", "Shipping and handling policy"),
    Example("My order arrived damaged, can I get a refund?", "Start return or exchange"),
    Example("You sent me the wrong item", "Start return or exchange"),
    Example("I want to exchange my item for another colour", "Start return or exchange"),
    Example("I ordered something and it wasn't what I expected. Can I return it?", "Start return or exchange"),
    Example("What's your return policy?", "Start return or exchange"),
    Example("Where's my package?", "Track order"),
    Example("When will my order arrive?", "Track order"),
    Example("What's my shipping number?", "Track order"),
    Example("Which carrier is my package with?", "Track order"),
    Example("Is my package delayed?", "Track order")
]

inputs = [" Am I still able to return my order?",
          "When can I expect my package?",
          "Do you ship overseas?",
          ]

response = co.classify(
    inputs=inputs,
    examples=examples,
)

print(response)
print(type(response))
