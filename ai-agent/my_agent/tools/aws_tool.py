import requests

def search_aws_docs(query: str) -> dict:
    """
    Busca informações oficiais da AWS Docs relacionadas ao termo informado.
    Retorna título, descrição resumida e URL da documentação.
    """

    search_query = f"site:docs.aws.amazon.com {query}"
    url = "https://api.duckduckgo.com/"

    params = {
        "q": search_query,
        "format": "json",
        "no_redirect": 1,
        "no_html": 1
    }

    response = requests.get(url, params=params, timeout=10)
    response.raise_for_status()

    data = response.json()

    result = {
        "query": query,
        "title": data.get("Heading"),
        "summary": data.get("AbstractText"),
        "source": data.get("AbstractURL")
    }

    return result
