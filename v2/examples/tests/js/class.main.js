/**
 * Copyright (c) 2012  Gwennaël Buchet Technology Services (hereinafter “Gwennaël Buchet”)
 *
 * License/Terms of Use
 *
 * Permission is hereby granted, free of charge and for the term of intellectual property rights on the Software, to any
 * person obtaining a copy of this software and associated documentation files (the "Software"), to use, copy, modify
 * and propagate free of charge, anywhere in the world, all or part of the Software subject to the following mandatory conditions:
 *
 *   •    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 *  Any failure to comply with the above shall automatically terminate the license and be construed as a breach of these
 *  Terms of Use causing significant harm to Gwennaël Buchet.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 *  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 *  OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 *  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  Except as contained in this notice, the name of Gwennaël Buchet shall not be used in advertising or otherwise to promote
 *  the use or other dealings in this Software without prior written authorization from Gwennaël Buchet.
 *
 *  These Terms of Use are subject to French law.
 *
 * @author Gwennael Buchet (gwennael.buchet@capgemini.com)
 * @date 10/08/2012
 *
 * Purpose :
 * text example
 * */
var CGMain = CGSGScene.extend(
	{
		initialize: function (canvas) {

			this._super(canvas);

			////// INITIALIZATION /////////

			this.initializeCanvas();

			this.createScene();

			this.startPlaying();
		},

		initializeCanvas: function () {
			//redimensionnement du canvas pour être full viewport en largeur
			this.viewDimension = cgsgGetRealViewportDimension();
			this.setCanvasDimension(this.viewDimension);
		},

		createScene: function () {
			//first create a root node with an arbitrary size and position
			this.rootNode = new CGSGNode(0, 0, 0, 0);
			this.sceneGraph.addNode(this.rootNode, null);

			var p1 = new CGSGNodeRegularPolygon(10, 10, 3, 20);
			this.rootNode.addChild(p1);

			var p2 = new CGSGNodeRegularPolygon(100, 10, 4, 40);
			this.rootNode.addChild(p2);

			var p3 = new CGSGNodeRegularPolygon(150, 10, 8, 20);
			this.rootNode.addChild(p3);

			p1.isDraggable = true;
			p1.isResizable = true;
			p2.isDraggable = true;
			p2.isResizable = true;
			p3.isDraggable = true;
			p3.isResizable = true;
		}

	}
);