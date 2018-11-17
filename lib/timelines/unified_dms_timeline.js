function UnifiedDMsTweetsTimeline(timelineId, manager, template, timelines) {
  UnifiedTweetsTimeline.call(this, timelineId, manager, template, timelines);
}

$.extend(UnifiedDMsTweetsTimeline.prototype, UnifiedTweetsTimeline.prototype, {
  /* overridden */
  _shouldIncludeTemplate: function(template) {
    return false;
  }
});
  
  
  
  