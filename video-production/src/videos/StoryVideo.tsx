import {TransitionSeries, linearTiming} from "@remotion/transitions";
import {fade} from "@remotion/transitions/fade";
import {Fragment} from "react";
import {generatedDurations, defaultSceneDuration} from "../generatedDurations";
import type {VideoStory} from "../videoContent";
import {StoryScene} from "../scenes/StoryScene";

export const transitionFrames = 12;
export const getStoryDuration = (story: VideoStory) => story.scenes.reduce((total, scene) => total + (generatedDurations[story.id]?.[scene.id] ?? defaultSceneDuration), 0) - transitionFrames * (story.scenes.length - 1);

export const StoryVideo = ({story}: {story: VideoStory}) => <TransitionSeries>{story.scenes.map((scene, index) => {const durationInFrames = generatedDurations[story.id]?.[scene.id] ?? defaultSceneDuration; return <Fragment key={scene.id}><TransitionSeries.Sequence durationInFrames={durationInFrames}><StoryScene story={story} scene={scene} sceneIndex={index} durationInFrames={durationInFrames} /></TransitionSeries.Sequence>{index < story.scenes.length - 1 && <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: transitionFrames})} />}</Fragment>;})}</TransitionSeries>;
