import timeit
from llm.wrapper import setup_qa_chain, query_embeddings

def main(input_query, semantic_search=False):
    start = timeit.default_timer()
    if semantic_search:
        semantic_search = query_embeddings(input_query)
        print(f'Semantic search: {semantic_search}')
        print('='*50)
        result = semantic_search  # Ensure result is returned
    else:
        qa_chain, retriever = setup_qa_chain()
        documents = retriever.get_relevant_documents(input_query)
        print("Source Documents:")
        for doc in documents:
            print(doc.page_content)
            print('-' * 50)
        response = qa_chain({'query': input_query})
        print(f'\nAnswer: {response["result"]}')
        result = response["result"]
        print('=' * 50)
    end = timeit.default_timer()

    print(f"Time to retrieve answer: {end - start}")
    return result
