#!/usr/bin/env python3
"""
Scrape RNADW YouTube channel for video information
Channel: https://www.youtube.com/@rwandanationalassociationo8664
"""

import requests
import re
import json
from urllib.parse import urlparse, parse_qs

def extract_channel_data(url):
    """
    Extract video data from YouTube channel page
    """
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
    }

    try:
        print(f"Fetching: {url}")
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()

        html_content = response.text

        # Extract ytInitialData from page source
        # YouTube embeds video data in JavaScript variable ytInitialData
        pattern = r'var ytInitialData = ({.*?});'
        matches = re.search(pattern, html_content)

        if not matches:
            print("Could not find ytInitialData in page source")
            # Try alternative pattern
            pattern = r'ytInitialData = ({.*?});'
            matches = re.search(pattern, html_content)

        if matches:
            try:
                data = json.loads(matches.group(1))

                # Navigate through YouTube's nested data structure
                videos = []

                # Look for video renderer objects in the data
                def find_videos_recursive(obj, videos_list):
                    """Recursively search for video renderers"""
                    if isinstance(obj, dict):
                        # Check if this is a video renderer
                        if 'videoRenderer' in obj:
                            video_data = obj['videoRenderer']
                            video = extract_video_info(video_data)
                            if video:
                                videos_list.append(video)

                        # Check for grid video renderer (used in channel videos tab)
                        if 'gridVideoRenderer' in obj:
                            video_data = obj['gridVideoRenderer']
                            video = extract_video_info(video_data)
                            if video:
                                videos_list.append(video)

                        # Recurse into nested dicts
                        for value in obj.values():
                            find_videos_recursive(value, videos_list)

                    elif isinstance(obj, list):
                        for item in obj:
                            find_videos_recursive(item, videos_list)

                def extract_video_info(video_data):
                    """Extract relevant info from video renderer data"""
                    video = {}

                    try:
                        # Video ID
                        if 'videoId' in video_data:
                            video['id'] = video_data['videoId']
                            video['url'] = f"https://www.youtube.com/watch?v={video_data['videoId']}"

                        # Title
                        if 'title' in video_data:
                            if 'runs' in video_data['title']:
                                video['title'] = video_data['title']['runs'][0]['text']
                            elif 'simpleText' in video_data['title']:
                                video['title'] = video_data['title']['simpleText']

                        # Thumbnail
                        if 'thumbnail' in video_data and 'thumbnails' in video_data['thumbnail']:
                            thumbnails = video_data['thumbnail']['thumbnails']
                            if thumbnails:
                                # Get highest quality thumbnail
                                video['thumbnail'] = thumbnails[-1]['url']

                        # Published date
                        if 'publishedTimeText' in video_data:
                            if 'simpleText' in video_data['publishedTimeText']:
                                video['published'] = video_data['publishedTimeText']['simpleText']

                        # View count
                        if 'viewCountText' in video_data:
                            if 'simpleText' in video_data['viewCountText']:
                                video['views'] = video_data['viewCountText']['simpleText']

                        return video if video else None

                    except Exception as e:
                        print(f"Error extracting video info: {e}")
                        return None

                # Start recursive search
                find_videos_recursive(data, videos)

                return videos

            except json.JSONDecodeError as e:
                print(f"Error parsing JSON: {e}")
                return None
        else:
            print("Could not find video data in page source")
            return None

    except requests.RequestException as e:
        print(f"Error fetching page: {e}")
        return None

def main():
    channel_url = "https://www.youtube.com/@rwandanationalassociationo8664/videos"

    print("RNADW YouTube Channel Video Extractor")
    print("=" * 80)
    print()

    videos = extract_channel_data(channel_url)

    if videos:
        print(f"\n✅ Successfully extracted {len(videos)} videos\n")
        print("=" * 80)

        for i, video in enumerate(videos, 1):
            print(f"\n{i}. **{video.get('title', 'No title')}**")
            print(f"   - Video ID: {video.get('id', 'N/A')}")
            print(f"   - URL: {video.get('url', 'N/A')}")
            print(f"   - Published: {video.get('published', 'N/A')}")
            print(f"   - Views: {video.get('views', 'N/A')}")
            print(f"   - Thumbnail: {video.get('thumbnail', 'N/A')}")

        # Save to JSON file
        output_file = "/Users/echerurodney/projects/stu/rnadw/rnadw_youtube_videos.json"
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(videos, f, indent=2, ensure_ascii=False)

        print(f"\n\n✅ Data saved to: {output_file}")

    else:
        print("\n❌ Failed to extract videos. YouTube may be blocking automated access.")
        print("\nAlternative approaches:")
        print("1. Use YouTube Data API v3 (requires API key)")
        print("2. Use browser automation (Selenium/Playwright)")
        print("3. Manually visit the channel and copy video information")

if __name__ == "__main__":
    main()
