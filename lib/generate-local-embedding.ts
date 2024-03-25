export async function generateLocalEmbedding(content: string) {
  throw new Error("local embeddings taken out. Not implemented")
  // const generateEmbedding = await pipeline(
  //   "feature-extraction",
  //   "Xenova/all-MiniLM-L6-v2"
  // )

  // const output = await generateEmbedding(content, {
  //   pooling: "mean",
  //   normalize: true
  // })

  // const embedding = Array.from(output.data)

  // return embedding
}
