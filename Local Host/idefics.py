import requests

def call_idfics_llm(prompt):
    url = "http://localhost:7071/api/http_trigger"
    
    # Set the payload with the prompt
    payload = {"prompt": prompt}
    
    try:
        # Make the API call to the locally hosted IDEFiCS LLM
        response = requests.post(url, json=payload)
        
        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            result = response.json()
            return result
        else:
            print(f"Error: {response.status_code} - {response.text}")
            return None
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

# Example usage:
prompt = "Write a code snippet in Python"
result = call_idfics_llm(prompt)

if result:
    print("IDFiCS LLM Response:")
    print(result)
else:
    print("Failed to get response from IDEFiCS LLM.")
