/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../../build/components/body/body-row-wrapper.component';
const styles_DataTableRowWrapperComponent:any[] = ([] as any[]);
export const RenderType_DataTableRowWrapperComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_DataTableRowWrapperComponent,
  data: {}
}
);
function View_DataTableRowWrapperComponent_3(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[(l()(),import0.ɵted((null as any),['\n      ']))],(null as any),(null as any));
}
function View_DataTableRowWrapperComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵand(8388608,(null as any),(null as any),2,(null as any),View_DataTableRowWrapperComponent_3)),
    import0.ɵdid(270336,(null as any),0,import1.NgTemplateOutlet,[import0.ViewContainerRef],{
      ngTemplateOutlet: [
        0,
        'ngTemplateOutlet'
      ]
      ,
      ngOutletContext: [
        1,
        'ngOutletContext'
      ]

    }
    ,(null as any)),
    import0.ɵpod(['row']),
    (l()(),import0.ɵand(0,(null as any),(null as any),0))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.rowDetail.template;
    const currVal_1:any = ck(v,2,0,co.row);
    ck(v,1,0,currVal_0,currVal_1);
  },(null as any));
}
function View_DataTableRowWrapperComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'datatable-row-detail'
      ]
      ],[[
        4,
        'height',
        'px'
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DataTableRowWrapperComponent_2)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n    ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_1:any = (co.rowDetail && co.rowDetail.template);
    ck(v,3,0,currVal_1);
  },(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.detailRowHeight;
    ck(v,0,0,currVal_0);
  });
}
export function View_DataTableRowWrapperComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n    '])),
    import0.ɵncd((null as any),0),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DataTableRowWrapperComponent_1)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n  ']))
  ]
  ,(ck,v) => {
    var co:import2.DataTableRowWrapperComponent = v.component;
    const currVal_0:any = co.expanded;
    ck(v,4,0,currVal_0);
  },(null as any));
}
function View_DataTableRowWrapperComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'datatable-row-wrapper',[[
        'class',
        'datatable-row-wrapper'
      ]
      ],(null as any),[[
        (null as any),
        'contextmenu'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('contextmenu' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,1).onContextmenu($event)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },View_DataTableRowWrapperComponent_0,RenderType_DataTableRowWrapperComponent)),
    import0.ɵdid(24576,(null as any),0,import2.DataTableRowWrapperComponent,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const DataTableRowWrapperComponentNgFactory:import0.ComponentFactory<import2.DataTableRowWrapperComponent> = import0.ɵccf('datatable-row-wrapper',import2.DataTableRowWrapperComponent,View_DataTableRowWrapperComponent_Host_0,{
  rowDetail: 'rowDetail',
  detailRowHeight: 'detailRowHeight',
  expanded: 'expanded',
  row: 'row'
}
,{rowContextmenu: 'rowContextmenu'},['*']);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovTG9jYWxEYXRhL3Byb2plY3RzL2FuZ3VsYXIyL25neC1kYXRhdGFibGUvYnVpbGQvY29tcG9uZW50cy9ib2R5L2JvZHktcm93LXdyYXBwZXIuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L0xvY2FsRGF0YS9wcm9qZWN0cy9hbmd1bGFyMi9uZ3gtZGF0YXRhYmxlL2J1aWxkL2NvbXBvbmVudHMvYm9keS9ib2R5LXJvdy13cmFwcGVyLmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L0xvY2FsRGF0YS9wcm9qZWN0cy9hbmd1bGFyMi9uZ3gtZGF0YXRhYmxlL2J1aWxkL2NvbXBvbmVudHMvYm9keS9ib2R5LXJvdy13cmFwcGVyLmNvbXBvbmVudC50cy5EYXRhVGFibGVSb3dXcmFwcGVyQ29tcG9uZW50Lmh0bWwiLCJuZzovLy9DOi9Mb2NhbERhdGEvcHJvamVjdHMvYW5ndWxhcjIvbmd4LWRhdGF0YWJsZS9idWlsZC9jb21wb25lbnRzL2JvZHkvYm9keS1yb3ctd3JhcHBlci5jb21wb25lbnQudHMuRGF0YVRhYmxlUm93V3JhcHBlckNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8ZGl2IFxuICAgICAgKm5nSWY9XCJleHBhbmRlZFwiXG4gICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cImRldGFpbFJvd0hlaWdodFwiIFxuICAgICAgY2xhc3M9XCJkYXRhdGFibGUtcm93LWRldGFpbFwiPlxuICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgICpuZ0lmPVwicm93RGV0YWlsICYmIHJvd0RldGFpbC50ZW1wbGF0ZVwiXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInJvd0RldGFpbC50ZW1wbGF0ZVwiXG4gICAgICAgIFtuZ091dGxldENvbnRleHRdPVwieyByb3c6IHJvdyB9XCI+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICAiLCI8ZGF0YXRhYmxlLXJvdy13cmFwcGVyPjwvZGF0YXRhYmxlLXJvdy13cmFwcGVyPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJDU3lDOzs7O0lBSG5DO2dCQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtnQkFHRTs7Ozs7SUFEQTtJQUNBO0lBSEYsU0FFRSxVQUNBLFNBSEY7Ozs7O01BSkY7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFHK0I7SUFDN0I7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUljOzs7O0lBSFo7SUFERixTQUNFLFNBREY7OztJQUZBO0lBRkYsU0FFRSxTQUZGOzs7OztJQUZKO2dCQUNJO0lBQXlCO0lBQ3pCO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFTTTs7OztJQVJKO0lBREYsU0FDRSxTQURGOzs7OztNQ0ZKO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2dCQUFBOzs7Ozs7Ozs7OyJ9
