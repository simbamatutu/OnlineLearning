import express from 'express';
import asyncHandler from 'express-async-handler';
import Course from '../models/courseModel.js';
import Courseware from '../models/coursewareModel.js';
import Subtopic from '../models/SubtopicModel.js';
// @desc create new course
// @route POST /api/courses
// @access private teacher/admin
const createCourseware = asyncHandler(async (req, res) => {
  const courseware = new Courseware({
    topicName: 'Sample Topic name',
    course: req.params.id,
    numberofTopics: 1,
    subTopics: [],
  });
  const createdCourseware = await courseware.save();

  res.status(201).json(createdCourseware);
});

// @desc Fetch app course
// @route GET /api/courses:id
// @access public
const getCoursewares = asyncHandler(async (req, res) => {
  const coursewares = await Courseware.find({ course: req.params.id });
  //PETRA error 400

  res.json(coursewares);
});

// @desc update courseware
// @route PUT /api/courseare/:id
// @access private teacher/admin
const updateCourseware = asyncHandler(async (req, res) => {
  const { topic } = await req.body;
  const courseware = await Courseware.findById(req.params.id);

  if (courseware) {
    courseware.topicName = topic;

    const updatedCourseware = await courseware.save();
    res.json(courseware);
  } else {
    res.status(404);
    throw new Error('Courseware not found!');
  }
});

// @desc create new course
// @route POST /api/courses
// @access private teacher/admin
const createSubtopic = asyncHandler(async (req, res) => {
  const subTopic = new Subtopic({
    subTopicTitle: 'Sample subTopic',
    courseware: req.params.id,
  });
  const createdSubtopic = await subTopic.save();

  res.status(201).json(createdSubtopic);
});

// @desc update courseware
// @route PUT /api/courseare/:id
// @access private teacher/admin
const updateSubTopic = asyncHandler(async (req, res) => {
  const { subTopicTitle, embedded } = await req.body;
  const subtopic = await Subtopic.findById(req.params.id);

  if (subtopic) {
    subtopic.subTopicTitle = subTopicTitle;
    subtopic.embbedVideo = embedded;

    const updatedSubtopic = await subtopic.save();
    res.json(subtopic);
  } else {
    res.status(404);
    throw new Error('Subtopic not found!');
  }
});

// @desc Fetch app course
// @route GET /api/courses:id
// @access public
const getSubTopic = asyncHandler(async (req, res) => {
  const subTopics = await Subtopic.find({ courseware: req.params.id });
  console.log(req.params.id);
  //PETRA error 400

  res.json(subTopics);
});

export {
  createSubtopic,
  getSubTopic,
  updateSubTopic,
  createCourseware,
  getCoursewares,
  updateCourseware,
};
