goog.provide('ol.Bounds');
goog.require('ol.UnreferencedBounds');
goog.require('ol.Projection');

/**
 * @export
 * @constructor
 * @param {number} minX Minimum X.
 * @param {number} minY Minimum Y.
 * @param {number} maxX Maximum X.
 * @param {number} maxY Maximum Y.
 * @param {ol.Projection=} opt_projection Projection.
 * @extends {ol.UnreferencedBounds}
 */
ol.Bounds = function(minX, minY, maxX, maxY, opt_projection) {

    /**
     * @protected
     * @type {number}
     */
    this.minX_ = minX;

    /**
     * @protected
     * @type {number}
     */
    this.minY_ = minY;

    /**
     * @protected
     * @type {number}
     */
    this.maxX_ = maxX;

    /**
     * @protected
     * @type {number}
     */
    this.maxY_ = maxY;

    /**
     * @protected
     * @type {ol.Projection|undefined}
     */
    this.projection_ = opt_projection;

};
goog.inherits(ol.Bounds, ol.UnreferencedBounds);

/**
 * @return {ol.Projection|undefined} Projection.
 */
ol.Bounds.prototype.getProjection = function() {
    return this.projection_;
};

/**
 * @param {ol.Projection|undefined} projection Projection.
 */
ol.Bounds.prototype.setProjection = function(projection) {
    this.projection_ = projection;
};
