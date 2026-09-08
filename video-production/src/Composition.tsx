import {Composition} from "remotion";
import {videoStories} from "./videoContent";
import {getStoryDuration, StoryVideo} from "./videos/StoryVideo";

export const VideoCompositions = () => (
  <>
    {videoStories.map((story) => (
      <Composition
        key={story.id}
        id={story.id}
        component={StoryVideo}
        defaultProps={{story}}
        durationInFrames={getStoryDuration(story)}
        fps={30}
        width={1280}
        height={720}
      />
    ))}
  </>
);
