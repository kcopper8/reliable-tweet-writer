export default function extractTweetId(url) {
  const result = /^(?:https:\/\/)?twitter.com\/[^/]+\/status\/(\d+)/.exec(url);
  if (result) {
    return result[1];
  }

  return url;
}
